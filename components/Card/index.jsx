import clsx from '../../utils/clsx';

function Card(props) {
  const { className, children } = props;

  return (
    <div
      {...props}
      className={clsx(
        className,
        'text-center sm:text-left mx-4 max-w-4xl p-8 lg:mx-auto bg-white shadow rounded-md grid grid-cols-auto sm:grid-cols-2 md:grid-cols-4 gap-3',
      )}
    >
      {children}
    </div>
  );
}

export default Card;
