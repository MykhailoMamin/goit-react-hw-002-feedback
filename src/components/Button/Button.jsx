export const Button = ({ label, name, onClick }) => {
  return (
    <button name={name} onClick={onClick}>{label}</button>
  )
}
