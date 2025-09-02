import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./style.module.scss";
import clsx from "clsx";
import { useToast } from "@shared/ui/Toast";

interface FormInputs {
    name: string;
    phone: string;
    message: string;
}

export const LeadForm: FC = () => {
    const toast = useToast()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Ошибка сети");

            toast.call({
                text: "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
                variant: "success",
                duration: 6000,
            });
            reset();
        } catch (error) {
            toast.call({
                text: "Что-то пошло не так. Пожалуйста, попробуйте снова.",
                variant: "error",
                duration: 6000,
            });
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["form"]}
        >
            <div className={styles["form-field"]}>
                {/* <p className={styles["form-label"]}>Имя</p> */}
                <input
                    className={clsx(
                        styles["form-input"],
                        errors.name && styles["form-input-error"]
                    )}
                    type="text"
                    {...register("name", { required: "Введите имя" })}
                    placeholder="Имя"
                />
                {errors.name && <p className={styles["form-error"]}>{errors.name.message}</p>}
            </div>

            <div className={styles["form-field"]}>
                {/* <p className={styles["form-label"]}>Телефон</p> */}
                <input
                    className={clsx(
                        styles["form-input"],
                        errors.phone && styles["form-input-error"]
                    )}
                    type="tel"
                    {...register("phone", {
                        required: "Введите номер телефона",
                        pattern: {
                            value: /^[+0-9\s()-]{7,20}$/,
                            message: "Некорректный номер",
                        },
                    })}
                    placeholder="Телефон"
                />
                {errors.phone && <p className={styles["form-error"]}>{errors.phone.message}</p>}
            </div>

            <div className={styles["form-field"]}>
                {/* <p className={styles["form-label"]}>Сообщение</p> */}
                <textarea
                    style={{ resize: "none" }}
                    className={styles["form-input"]}
                    {...register("message")}
                    placeholder="Сообщение"
                    rows={3}
                />
            </div>

            <button
                type="submit"
                className={clsx(
                    styles["form-button"],
                    (errors.phone || errors.name) && styles["form-button-disabled"]
                )}
            >
                Отправить
            </button>

        </form>
    )
}