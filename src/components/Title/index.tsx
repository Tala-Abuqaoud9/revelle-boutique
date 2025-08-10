
type props = {
children : React.ReactNode;
className?: string;

}
export default function Title({children, className = ""}: props){
  return (
    <h1 className={`text-5xl font-bold ${className}`}>
      {children}
    </h1>
  );
}
