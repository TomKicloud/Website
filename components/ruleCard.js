import styles from "./ruleCard.module.css";

const RuleCard = (props) => {
  return (
    <div className={styles.ruleCard} x-data="{selected: null}">
      <h1 className={styles.ruleHeader}>
        {props.rule.ruleId} - {props.rule.ruleName}
      </h1>
      <ul className={styles.list}>
        {props.rule.rules.map((rule) => (
          <li className={styles.listItem}>
            ({rule.subRule}) - {rule.rule}
            <ul className={styles.list}>
            {rule.ruleExamples?.map((example) => <li key={example.exampleId}> {example.example}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RuleCard;
