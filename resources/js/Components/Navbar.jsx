import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        Newsportal
                    </a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    8 Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $999
                                </span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {!user ? (
                                <>
                                    <li>
                                        <Link href={route('login')} as="button">Login</Link>
                                    </li>
                                    <li>
                                        <Link href={route('register')} as="button">Register</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link href={route('dashboard')} as="button">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={route('profile')} as="button">Profile</Link>
                                    </li>
                                    <li>
                                        <Link href={route('logout')} as="button">Logout</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
