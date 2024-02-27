export default function MyButton({ title }: { title: string }) {
  function click(){
    alert(1212);
  }

  return (
    <button onClick={click}>{title}</button>
  );
}