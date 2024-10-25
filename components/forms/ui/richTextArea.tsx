interface Props {
  value?: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  hasError?: boolean;
  error?: string;
  setText?: (e:any) => void;
}

const richTextArea = ({
  value,
  label,
  name,
  disabled,
  hasError,
  error,
  setText
}: Props) => {

  return <>
          {label &&
            <label className="text-primary font-semibold">{label}</label>
          }
          <textarea 
            name={name}
            disabled={disabled}
            className='w-full block px-4 outline-none resize-none bg-gray-100 rounded-xl p-2 shadow relative' 
            onChange={setText} 
            value={value} 
          />
          {hasError && (
            <small className="text-red-500">{`${error}.`}</small>
          )}
      </>;

};

export default richTextArea;