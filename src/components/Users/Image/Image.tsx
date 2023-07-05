const Image = ({ src, alt, ...pros }: any) => {
  return <img src={src} {...pros} alt={alt} />;
};
export default Image;
