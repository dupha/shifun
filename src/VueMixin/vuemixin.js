export default function () {
  const _H5Adaptation = () => {
    document.documentElement.style.fontSize = (document.documentElement.clientWidth / 375) * 100 + "px";
  };
  const _Adaptation = () => {
    document.documentElement.style.fontSize = (document.documentElement.clientWidth / 1920) * 100 + "px";
  };
  return {
    _H5Adaptation,
    _Adaptation
  };
}
