import { CoursePart } from '../types';

interface ContentProps {
  parts: CoursePart[];
}

const Content = ({ parts }: ContentProps) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  return (
    <>
      {parts.map((part) => {
        switch (part.kind) {
          case 'basic':
            return (
              <p key={part.name}>
                <b>
                  {part.name} {part.exerciseCount}
                </b>
                <br /> {part.description}
              </p>
            );
          case 'group':
            return (
              <p key={part.name}>
                <b>
                  {part.name} {part.exerciseCount}
                </b>
                <br /> group exercises {part.groupProjectCount}
              </p>
            );
          case 'background':
            return (
              <p key={part.name}>
                <b>
                  {part.name} {part.exerciseCount}
                </b>
                <br /> {part.description}
                <br /> background material: {part.backroundMaterial}
              </p>
            );
          case 'requirements':
            return (
              <p key={part.name}>
                <b>
                  {part.name} {part.exerciseCount}
                </b>
                <br /> {part.description}
                <br /> required skills: {part.requirements.join(', ')}
              </p>
            );
          default:
            return assertNever(part);
        }
      })}
    </>
  );
};

export default Content;
