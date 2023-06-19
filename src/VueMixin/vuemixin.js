export default function () {
  const _H5Adaptation = () => {
    document.documentElement.style.fontSize = (document.documentElement.clientWidth / 750) * 100 + "px";
  };
  return {
    _H5Adaptation,
  };
}
