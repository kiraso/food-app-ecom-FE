import LogoIcon from '../../Finn-Food.png';

const Logo = () => {
  return (
    <img
      onClick={() => window.location.replace('/')}
      src={LogoIcon}
      alt={''}
      className="hidden md:block cursor-pointer"
      height="200"
      width="200"
    />
  );
};

export default Logo;
