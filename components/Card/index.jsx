function Card({ children, className }) {
  return (
    <div className={['text-center sm:text-left mx-4 max-w-4xl p-8 lg:mx-auto bg-white shadow rounded-md grid grid-cols-auto sm:grid-cols-2 md:grid-cols-4 gap-3', className].join(' ')}>
      {children}
    </div>
  );
}

export default Card;
