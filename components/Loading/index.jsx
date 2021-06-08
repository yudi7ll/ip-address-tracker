import { LoadingIcon } from '../Icons';

function Loading() {
  return (
    <div className="w-12 h-12 text-2xl text-center animate-spin">
      <LoadingIcon width="3rem" height="3rem" />
    </div>
  );
}

export default Loading;
