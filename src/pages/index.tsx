import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <div>
      <header className="space-y-8 py-10 px-2 text-center">
        <h1 className="text-2xl font-bold">MAP POC</h1>
        <p className="text-sm text-balance">
          Let's get started and play around with the MAP.
        </p>
        <Link
          to="/map"
          className={buttonVariants({
            className: 'gap-2',
            size: 'lg',
          })}
        >
          <span>start</span>
        </Link>

        <div>
          <Link
            to="/about"
            className={buttonVariants({
              variant: 'link',
            })}
          >
            About Us
          </Link>
        </div>
      </header>
    </div>
  );
}
