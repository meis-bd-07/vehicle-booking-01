import {useEffect, useRef} from 'react';

const useIsMountHook = () => {
  const mount = useRef<boolean>(false);
  useEffect(() => {
    mount.current = true;
  }, []);
  return mount.current;
};
export default useIsMountHook;
