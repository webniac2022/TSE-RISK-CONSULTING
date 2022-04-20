import { useEffect, useMemo, createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mode, setMode] = useState('dark');
  const cucu = useMemo(() => {
    return { '/': 0, '/despre': 1, '/servicii': 2, '/contact': 3 };
  }, []);
  const [tabIndexx, setTabIndex] = useState(cucu[router.pathname]);

  const [services, setServices] = useState([
    { title: 'Bun venit', path: '/', tabIndex: 0 },
    { title: 'Despre noi', path: '/despre', tabIndex: 1 },
    { title: 'Servicii', path: '/servicii', tabIndex: 2 },
    { title: 'Contact', path: '/contact', tabIndex: 3 },
  ]);

  const [footerInfo, setFooterInfo] = useState([
    { title: 'Politica de confidentialitate', path: '/confidentialitate' },
    { title: 'Politica cookies', path: '/cookies' },
    { title: 'Termeni si conditii', path: '/termeni' },
  ]);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setTabIndex(cucu[url]);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [cucu, router.events]);

  function toggleTabIndex(i) {
    setTabIndex(i);
  }

  function toggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const appState = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    services,
    toggleTheme,
    mode,
    toggleTabIndex,
    tabIndexx,
    footerInfo,
  };
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
