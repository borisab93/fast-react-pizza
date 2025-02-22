import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
    const base =
        'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

    const style = {
        primary: base + ' py-3 px-4 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
        secondary:
            'inline-block text-sm rounded-full font-semibold border-2 border-stone-300 uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring  focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-3 py-2.5 md:px-6 md:py-3.5',
    };

    if (to)
        return (
            <Link className={style[type]} to={to}>
                {children}
            </Link>
        );

    if (onClick)
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={style[type]}
            >
                {children}
            </button>
        );

    return (
        <button disabled={disabled} className={style[type]}>
            {children}
        </button>
    );
}

export default Button;
