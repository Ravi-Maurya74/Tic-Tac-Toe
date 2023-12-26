export default function Log({ log }) {
  return (
    <ol id="log">
      {log.map((logItem, index) => (
        <li key={index}>{logItem}</li>
      ))}
    </ol>
  );
}