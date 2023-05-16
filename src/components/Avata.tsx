import AvatarImg from '../3d-avatar-woman.png';

const Avatar = () => {
  return (
    <div className="rounded-full">
      <img
        alt={''}
        height="30"
        width="30"
        src={AvatarImg} // change to suit your needs
        className="rounded-full"
      />{' '}
    </div>
  );
};

export default Avatar;
