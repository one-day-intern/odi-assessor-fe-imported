import { CircularProgressBar } from "@components/shared/elements/CircularProgressBar";
import React, { ReactNode } from "react";
import styles from "./AssesseeParticipation.module.css";
import { CountdownTimer } from "./CountdownTimer";
import { DetailCard } from "./DetailCard";
import { GradeDetail } from "../../../shared/elements/GradeDetail";
import { calculateSubmittedToolPercentage } from "@utils/formatters/attemptDisplayFormatters";

interface AssessmentEventData {
  name: string;
}

interface Props {
  children: ReactNode;
  data: AssessmentEventData;
  tools: ToolAttempt[];
  endTime: Date;
}

const AssesseeParticipation = ({ children, data, tools, endTime }: Props) => {
  return (
    <main id="main-content" className={styles["content"]} data-testid="main">
      <h1 className={styles["content__title"]}>{data.name}</h1>

      <div className={styles["divider"]}></div>

      <div className={styles["content__group-card"]}>
        <DetailCard>
          <>
            <CircularProgressBar
              progress={calculateSubmittedToolPercentage(tools)}
              options={{ size: "14ch", bgColor: "#edf2fd", fontSize: "2rem" }}
            />
            <p
              className={`${styles["card__text"]} ${styles["card__text--secondary"]} ${styles["card__text--center"]}`}
            >
              Assessment Completion
            </p>
          </>
        </DetailCard>
        <DetailCard>
          <GradeDetail grade={80} />
        </DetailCard>
        <DetailCard>
          <CountdownTimer
            timeEndFromUnixEpoch={Math.floor(endTime.getTime() / 1000)}
          />
        </DetailCard>
      </div>

      <div className={styles["content__wrapper"]}>
        <h2 className={styles["content__subtitle"]}>Assessment Progress</h2>
        {children}
      </div>
    </main>
  );
};

export default AssesseeParticipation;
