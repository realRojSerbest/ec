const xwendinewe = (X1, X2) => {
  return X2 - X1;
};

const rojekan = (B1, B2) => {
  return (B2 - B1) / (1000 * 60 * 60 * 24);
};

const jimardin = {
  malan: (X1, X2, B1, B2) => {
    let X = xwendinewe(X1, X2),
      R = rojekan(B1, B2),
      pare;
    X = X / R;

    if (X >= 2050) {
      return;
    }

    if (X == 15 || X < 15) {
      pare = X * 15 * R;
    } else if (X > 15 && (X == 30 || X < 30)) {
      pare = (X - 15) * 20 * R + 15 * 15 * R;
    } else if (X > 30 && (X == 50 || X < 50)) {
      pare = (X - 30) * 35 * R + 15 * 20 * R + 15 * 15 * R;
    } else if (X > 50 && (X == 70 || X < 70)) {
      pare = (X - 50) * 60 * R + 15 * 20 * R + 15 * 15 * R + 20 * 35 * R;
    } else if (X > 70 && (X == 100 || X < 100)) {
      pare =
        (X - 70) * 75 * R +
        20 * 60 * R +
        15 * 20 * R +
        15 * 15 * R +
        20 * 35 * R;
    } else if (X > 100 && (X == 166 || X < 166)) {
      pare =
        (X - 100) * 150 * R +
        30 * 75 * R +
        20 * 60 * R +
        15 * 20 * R +
        15 * 15 * R +
        20 * 35 * R;
    } else if (X > 166.0) {
      pare =
        (X - 166) * 200 * R +
        166 * 150 * R +
        30 * 75 * R +
        20 * 60 * R +
        15 * 20 * R +
        15 * 15 * R +
        20 * 35 * R;
    }

    return {
      xwendinewe: xwendinewe(X1, X2),
      rojekan: rojekan(B1, B2),
      pare: pare,
    };
  },
  bazirgani: (X1, X2, B1, B2) => {
    return {
      xwendinewe: xwendinewe(X1, X2),
      rojekan: rojekan(B1, B2),
      pare: xwendinewe(X1, X2) * 130,
    };
  },
  kistukal: (X1, X2, B1, B2) => {
    return {
      xwendinewe: xwendinewe(X1, X2),
      rojekan: rojekan(B1, B2),
      pare: xwendinewe(X1, X2) * 30,
    };
  },
};

const getInput = () => {
  let X1 = document.querySelector("#xwendineweyPesu").valueAsNumber,
    X2 = document.querySelector("#xwendineweyEsta").valueAsNumber,
    B1 = document.querySelector("#berwariPesu").valueAsDate,
    B2 = document.querySelector("#berwariEsta").valueAsDate,
    M = document.querySelector("#regeyJimardin").value;

  if (X1 && X2 && B1 && B2 && M) {
    return {
      X1: X1,
      X2: X2,
      B1: B1,
      B2: B2,
      M: M,
    };
  }

  return false;
};

const onChange = (event) => {
  let input = getInput(),
    result;

  if (input) {
    result = jimardin[input.M](input.X1, input.X2, input.B1, input.B2);

    if (result) {
      document.querySelector("#encamekan").innerHTML =
        "بڕی پارەی ئێستا: " +
        result.pare.toString() +
        "\nهێندی بەکارهاتوو: " +
        result.xwendinewe.toString() +
        "\nڕۆژ: " +
        result.rojekan.toString();
    }
  }
};

document.querySelector("#xwendineweyPesu").addEventListener("change", onChange);
document.querySelector("#xwendineweyEsta").addEventListener("change", onChange);
document.querySelector("#berwariPesu").addEventListener("change", onChange);
document.querySelector("#berwariEsta").addEventListener("change", onChange);
document.querySelector("#regeyJimardin").addEventListener("change", onChange);
