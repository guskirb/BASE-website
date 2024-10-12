interface TextAreaProps {
  name: string;
  id: string;
}

export const TextArea = ({ name, id }: TextAreaProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{name}</label>
      <textarea className="border" name={id} id={id} rows={4}></textarea>
    </div>
  );
};
