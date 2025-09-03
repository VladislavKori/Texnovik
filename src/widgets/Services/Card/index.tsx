import { FC } from "react";
import styles from "./style.module.scss";
import CirclInfo from "@shared/assets/circle-info.svg?react";
import { useNavigate } from "react-router-dom";

interface IServiceCardProps {
    title: string;
    description: string;
    link: string;
    imageURL: string;
}

export const ServiceCard: FC<IServiceCardProps> = (props) => {
    const navigate = useNavigate()

    return (
        <div className={styles["card"]}>
            <div className={styles["card-info"]}>
                <div className={styles["card-texts"]}>
                    <h2 className={styles["card-title"]}>{props.title}</h2>
                    <p className={styles["card-subtitle"]}>{props.description}</p>
                </div>
                <button className={styles["card-button"]} onClick={() => navigate(props.link)}>
                    <CirclInfo /> Подробнее
                </button>
            </div>
            <div 
                className={styles["card-image"]} 
                style={{
                backgroundImage: `url('${props.imageURL}')`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}></div>
        </div>
    )
}