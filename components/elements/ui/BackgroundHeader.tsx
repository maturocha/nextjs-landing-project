interface Props {
  className?: string;
  children: React.ReactElement | React.ReactElement[]
  background: string;
}

const BackgroundHeader = ({
  className = '',
  children,
  background
  
}: Props) => {

  return  <section 
            className={`${background} bg-cover py-12 ${className}`}>
              {children}
          </section>
};

export default BackgroundHeader;