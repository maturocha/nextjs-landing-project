interface Props {
  className?: string;
  title?: string;
  text?: string;
  icon?: React.ReactNode;
  classTitle?: string;
  classText?: string;
  align?: 'right' | 'allright' | 'left' | 'vertical'
}

const HeadingIconText = ({
  className = '',
  title,
  text,
  icon,
  classTitle = 'text-xl font-semibold text-primary',
  classText = 'text-base text-gray-600 leading-relaxed',
  align = 'right'
}: Props) => {

  const flex = {
    left: 'sm:flex-row-reverse sm:space-x-6 items-center',
    right: 'flex-col sm:flex-row sm:space-x-6 items-center',
    allright: 'flex-col items-center space-y-2 sm:flex-row sm:space-x-6 md:items-start',
    vertical: 'flex-col space-y-4 items-center'
  }

  const textAlign = {
    left: 'sm:text-left',
    right: 'sm:text-right',
    allright: 'sm:text-left',
    vertical: 'text-center'
  }

  return  <article className={`flex ${flex[align]} ${className}`}>

            {icon && icon}

            <div className={`flex flex-col space-y-2 ${textAlign['vertical']} ${textAlign[align]}`}>

              <h5 className={`${classTitle}`}>{title}</h5>
              {text &&
                <p className={`${classText}`}>{text}</p>
              }
              

            </div>

        </article>
};

export default HeadingIconText;