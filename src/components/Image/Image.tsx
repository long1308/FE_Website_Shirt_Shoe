const Image = ({ src, alt, className, ...pros }: any) => {
  return <img className={className} src={src} {...pros} alt={alt} />;
};
export default Image;
