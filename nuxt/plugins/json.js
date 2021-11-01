import Vue from "vue";
import { $json } from "@voltra/json";

[Vue, Vue.prototype]
  .forEach(target => {
    if (typeof target["$json"] !== "undefined")
      return;

    Object.defineProperties(target, {
      "$json": {
        get() {
          return $json;
        },
      },
    });
  });
