import "./Exercise5.css";

export function CourseGoal({ title, desc }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}

function Exercise5() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        <CourseGoal title="Learn React" desc="In-depth" />
        <CourseGoal
          title="Practice"
          desc="Practice working with react components etc"
        />
      </ul>
    </div>
  );
}

export default Exercise5;
