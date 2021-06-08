import clsx from '../../utils/clsx';

function CardItem({ title, content, className }) {
  return (
    <div className={clsx('py-5 md:py-0', className)}>
      <div className="text-xs font-bold uppercase text-gray-dark">{title}</div>
      <div className="mt-2 text-lg font-bold text-gray-very-dark">{content}</div>
    </div>
  );
}

export default CardItem;
