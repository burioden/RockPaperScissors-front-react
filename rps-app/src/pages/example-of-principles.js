const examples = [""];

export default function Home() {

  return (
    <>
      <li>
        {examples.forEach(example => {
          <ul>example</ul>
        });}
      </li>
    </>
  );
};