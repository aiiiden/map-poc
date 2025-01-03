import { useState } from 'react';
import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';

export default function AboutPage() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <header className="space-y-8 py-10 px-2 text-center">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="text-sm text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapi
          en. Nullam nec mi et neque pharetra sollicitudin. Praesent imperdiet
          mi nec ante. Donec lacinia, massa et fringilla mollis, ante nulla
          ornare nibh, id feugiat justo neque eu nisl. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum
          dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum
          vulputate, nunc.
        </p>

        <div>
          <button
            onClick={() => setCount(count + 1)}
            className={buttonVariants({
              className: 'gap-2',
            })}
          >
            <span>Count: {count}</span>
            <span>Increment</span>
          </button>
        </div>

        <div>
          <Link
            to="/"
            className={buttonVariants({
              variant: 'link',
            })}
          >
            Go home
          </Link>
        </div>
      </header>
    </div>
  );
}
