const Header = ({ name }: { name: string }) => <h1>{name}</h1>;

interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  parts: CoursePart[];
}

const Content = (props: ContentProps) => (
  <>
    <p>
      {props.parts[0].name} {props.parts[0].exerciseCount}
    </p>
    <p>
      {props.parts[1].name} {props.parts[1].exerciseCount}
    </p>
    <p>
      {props.parts[2].name} {props.parts[2].exerciseCount}
    </p>
  </>
);

interface TotalProps {
  parts: CoursePart[];
}

const Total = (props: TotalProps) => (
  <>
    <p>
      Number of exercises{' '}
      {props.parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  </>
);

const App = () => {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts} />
    </div>
  );
};

export default App;
