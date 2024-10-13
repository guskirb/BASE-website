interface InputProps {
  name: string;
  id: string;
  type: string;
}

export const Input = ({ name, id, type }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{name}</label>
      <input className="border p-2" type={type} id={id} placeholder={name} />
    </div>
  );
};
