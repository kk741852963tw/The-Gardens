

Characters = function({isSize, isComfort, isFit, isLength, isQuality, isWidth}) {
  return(
    <div>
      {isSize &&
        <div>
          <h4>Size</h4>
            <select>
              <input id="size1" type="radio" name="size" value="1"></input>
              <label for="size1">A size too small</label>
              <input id="size2" type="radio" name="size" value="2"></input>
              <label for="size2">1/2 a size too small</label>
              <input id="size3" type="radio" name="size" value="3"></input>
              <label for="size3">Perfect</label>
              <input id="size4" type="radio" name="size" value="4"></input>
              <label for="size4">1/2 a size too big</label>
              <input id="size5" type="radio" name="size" value="5"></input>
              <label for="size5">A size too wide</label>
            </select>
        </div>
      }

      {isComfort &&
        <div>
          <h4>Comfort</h4>
          <select>
            <input id="Comfort1" type="radio" name="Comfort" value="1"></input>
            <label for="Comfort1">Uncomfortable</label>
            <input id="Comfort2" type="radio" name="Comfort" value="2"></input>
            <label for="Comfort2">Slightly uncomfortable</label>
            <input id="Comfort3" type="radio" name="Comfort" value="3"></input>
            <label for="Comfort3">Ok</label>
            <input id="Comfort4" type="radio" name="Comfort" value="4"></input>
            <label for="Comfort4">Comfortable</label>
            <input id="Comfort5" type="radio" name="Comfort" value="5"></input>
            <label for="Comfort5">Perfect</label>
          </select>
        </div>
      }

      {isQuality &&
        <div>
          <h4>Quality</h4>
          <select>
            <input id="Quality1" type="radio" name="Quality" value="1"></input>
            <label for="Quality1">Poor</label>
            <input id="Quality2" type="radio" name="Quality" value="2"></input>
            <label for="Quality2">Below average</label>
            <input id="Quality3" type="radio" name="Quality" value="3"></input>
            <label for="Quality3">What I expected</label>
            <input id="Quality4" type="radio" name="Quality" value="4"></input>
            <label for="Quality4">Pretty great</label>
            <input id="Quality5" type="radio" name="Quality" value="5"></input>
            <label for="Quality5">Perfect</label>
          </select>
        </div>
      }


      {isLength &&

      <div>
        <h4>Length</h4>
        <select>
          <input id="Length1" type="radio" name="Length" value="1"></input>
          <label for="Length1">Runs Short</label>
          <input id="Length2" type="radio" name="Length" value="2"></input>
          <label for="Length2">Runs slightly short</label>
          <input id="Length3" type="radio" name="Length" value="3"></input>
          <label for="Length3">Perfect</label>
          <input id="Length4" type="radio" name="Length" value="4"></input>
          <label for="Length4">Runs slightly long</label>
          <input id="Length5" type="radio" name="Length" value="5"></input>
          <label for="Length5">Runs long</label>
        </select>
      </div>
      }

      {isFit &&

      <div>
        <h4>Fit</h4>
        <select>
          <input id="Fit1" type="radio" name="Fit" value="1"></input>
          <label for="Fit1">Runs tight</label>
          <input id="Fit2" type="radio" name="Fit" value="2"></input>
          <label for="Fit2">Runs slightly tight</label>
          <input id="Fit3" type="radio" name="Fit" value="3"></input>
          <label for="Fit3">Perfect</label>
          <input id="Fit4" type="radio" name="Fit" value="4"></input>
          <label for="Fit4">Runs slightly long</label>
          <input id="Fit5" type="radio" name="Fit" value="5"></input>
          <label for="Fit5">Runs long</label>
        </select>
      </div>
      }

      {isWidth &&

      <div>
        <h4>Width</h4>
        <select>
          <input id="Width1" type="radio" name="Width" value="1"></input>
          <label for="Width1">Too narrow</label>
          <input id="Width2" type="radio" name="Width" value="2"></input>
          <label for="Width2">Slightly narrow</label>
          <input id="Width3" type="radio" name="Width" value="3"></input>
          <label for="Width3">Perfect</label>
          <input id="Width4" type="radio" name="Width" value="4"></input>
          <label for="Width4">Slightly wide</label>
          <input id="Width5" type="radio" name="Width" value="5"></input>
          <label for="Width5">Too wide</label>
        </select>
      </div>
      }
    </div>
  );
}