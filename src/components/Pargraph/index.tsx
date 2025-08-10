
type props = {
children : React.ReactNode;
className?: string;

}
export default function Paragraph({children, className = ""}: props){
  return (
    <p className={`text-base ${className}`}>
      {children}
    </p>
  );
}
