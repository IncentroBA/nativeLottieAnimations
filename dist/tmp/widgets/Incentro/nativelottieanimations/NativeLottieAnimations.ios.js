import { Dimensions, View } from 'react-native';
import { useState, useEffect, createElement } from 'react';
import LottieView from 'lottie-react-native';

const defaultStyle = {
  container: {},
  fullContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  loader: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 4,
    alignItems: "center",
    height: 200,
    justifyContent: "center",
    left: Dimensions.get("window").width / 2 - 100,
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 100,
    width: 200,
    zIndex: 3
  },
  hidden: {
    display: "none"
  }
};
function NativeLottieAnimations({
  fileVisibility,
  lottieFile,
  style,
  useAsLoader,
  imageFullPage,
  imageHeight,
  imageWidth
}) {
  const [visible, setVisible] = useState(false);
  const styles = defaultStyle;
  const useFullPage = imageFullPage === true ? styles.fullContainer : styles.container;
  const containerStyle = useAsLoader === true ? styles.loader : useFullPage;
  const setImageStye = imageFullPage === false ? {
    height: imageHeight,
    width: imageWidth
  } : null;
  useEffect(() => {
    if (fileVisibility && fileVisibility.status === "available" && fileVisibility.value === false) {
      setVisible(false);
    } else if (fileVisibility && fileVisibility.status === "available" && fileVisibility.value === true) {
      setVisible(true);
    } else {
      setVisible(true);
    }
  }, [fileVisibility, visible]);
  if (lottieFile) {
    return createElement(View, {
      style: visible ? containerStyle : styles.hidden
    }, createElement(LottieView, {
      style: setImageStye,
      source: JSON.parse(lottieFile),
      autoPlay: true,
      loop: true
    }));
  } else return null;
}

export { NativeLottieAnimations };
