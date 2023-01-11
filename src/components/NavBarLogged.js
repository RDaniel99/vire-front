import NavBar from './NavBar';

export default function NavBarLogged() {

    const ITEMS = [
        {
            label: 'Playlist',
            href: '/playlist'
        },
        {
            label: 'Past Purchases',
            href: '/purchases'
        },
        {
            label: 'Profile',
            href: '/profile'
        }
    ];

    return (
        <NavBar items={ITEMS}></NavBar>
    );
}
