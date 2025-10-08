import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./style.module.scss";
import clsx from "clsx";
import { useToast } from "@shared/ui/Toast";
import { Button } from "@shared/ui/Button";
import { IMaskInput } from 'react-imask';

interface FormInputs {
    name: string;
    phone: string;
    message: string;
    consent: boolean;
}

export const LeadForm: FC = () => {
    const toast = useToast()
    const [isSending, setIsSending] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<FormInputs>();

    const getPageName = (): string => {
        switch (location.pathname) {
            case "/heavytech-repair":
                return "1. Ремонт спецтехники"
            case "/plasma-cutting":
                return "2. Плазменная резка металла"
            case "/industrial-installation":
                return "3. Монтаж промышленного оборудования"
            case "/engineering-networks":
                return "4. Монтаж инженерных сетей"
            case "/cargo-delivery":
                return "5. Карго доставка из Китая"
            case "/":
                return "Главная страница"
            default:
                return "Страница не определена"
        }
    }

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setIsSending(true)
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fromPage: getPageName(),
                    ...data
                }),
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
        } finally {
            setIsSending(false)
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["form"]}
        >
            <div className={styles["form-field"]}>
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
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: "Введите номер телефона",
                        minLength: { value: 7, message: "Слишком короткий номер" },
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <>
                            <IMaskInput
                                className={clsx(
                                    styles["form-input"],
                                    errors.phone && styles["form-input-error"]
                                )}
                                mask="+{7} (000) 000-00-00"
                                value={value}
                                onAccept={(val) => onChange(val)}
                                placeholder="Телефон"
                            />
                            {error && <p className={styles["form-error"]}>{error.message}</p>}
                        </>
                    )}
                />
            </div>

            <div className={styles["form-field"]}>
                <textarea
                    style={{ resize: "none" }}
                    className={styles["form-input"]}
                    {...register("message")}
                    placeholder="Сообщение"
                    rows={3}
                />
            </div>

            <div className={styles["form-field"]}>
                <label className={styles["form-label"]}>
                    <input
                        type="checkbox"
                        {...register(
                            "consent",
                            { required: "Необходимо согласие с политикой конфиденциальности" }
                        )}
                    /> {" "}
                    Я согласен на обработку персональных данных и принимаю {" "}
                    <a
                        className={styles["form-link"]}
                        href="/privacy"
                        target="_blank"
                    >
                        Политику конфиденциальности
                    </a>
                </label>
                {errors.consent && <p className={styles["form-error"]}>{errors.consent.message}</p>}
            </div>

            <Button
                type="submit"
                fullWidth
                size="m"
                variant="default"
                isLoading={isSending}
                disabled={Boolean(errors.phone || errors.name || errors.consent)}
            >
                Отправить
            </Button>

        </form>
    )
}