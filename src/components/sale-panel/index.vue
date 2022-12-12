<template>
  <div class="sale-panel">
    <div class="lf">
      <div class="pt">
        <img
          class="icon"
          src="@/assets/images/public/salepanel/icon.png"
          alt=""
        />
        <span class="txt">集 团</span>
      </div>
      <div class="txt-sum">
        <div class="lbl-val">
          <div class="lbl">
            <span class="tl">累计销售额</span>
            <span class="dw">亿元</span>
          </div>
          <div class="val">{{ getSum() }}</div>
        </div>
        <div class="line"></div>
      </div>
      <div class="ll"></div>
    </div>
    <div class="mid">
      <div class="pt">
        <span class="txt">{{ cd1.name }}</span>
        <div class="ll"></div>
        <div class="llv t"></div>
      </div>
      <div class="pt">
        <span class="txt">{{ cd2.name }}</span>
        <div class="ll"></div>
      </div>
      <div class="pt">
        <span class="txt">{{ cd3.name }}</span>
        <div class="ll"></div>
        <div class="llv b"></div>
      </div>
    </div>
    <div class="rg">
      <div class="md">
        <img class="jt" src="@/assets/images/public/salepanel/jt.png" />
        <div class="l-txt">
          <img class="lfk" src="@/assets/images/public/salepanel/lf_fk.png" />
          <img class="rfk" src="@/assets/images/public/salepanel/lf_fk.png" />
          <span class="l-f"></span>
          <span class="r-f"></span>

          <div class="nums">
            <span class="v1">{{ cd1.number }}</span>
            <span class="l1">亿</span>
            <span class="l1">占比</span>
            <span class="v2">{{ getNumber(cd1.number) }}</span>
          </div>
        </div>
      </div>
      <div class="md">
        <img class="jt" src="@/assets/images/public/salepanel/jt.png" />
        <div class="l-txt">
          <img class="lfk" src="@/assets/images/public/salepanel/lf_fk.png" />
          <img class="rfk" src="@/assets/images/public/salepanel/lf_fk.png" />
          <span class="l-f"></span>
          <span class="r-f"></span>

          <div class="nums">
            <span class="v1">{{ cd2.number }}</span>
            <span class="l1">亿</span>
            <span class="l1">占比</span>
            <span class="v2">{{ getNumber(cd2.number) }}</span>
          </div>
        </div>
      </div>
      <div class="md">
        <img class="jt" src="@/assets/images/public/salepanel/jt.png" />
        <div class="l-txt">
          <img class="lfk" src="@/assets/images/public/salepanel/lf_fk.png" />
          <img class="rfk" src="@/assets/images/public/salepanel/lf_fk.png" />
          <span class="l-f"></span>
          <span class="r-f"></span>

          <div class="nums">
            <span class="v1">{{ cd3.number }}</span>
            <span class="l1">亿</span>
            <span class="l1">占比</span>
            <span class="v2">{{ getNumber(cd3.number) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GetMarketSalesStatics } from "@/api/person";
export default {
  data() {
    return {
      cd1: {},
      cd2: {},
      cd3: {},

      resList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      GetMarketSalesStatics().then((res) => {
        console.log(res.list);
        this.cd1 = res.list[0];
        this.cd2 = res.list[1];
        this.cd3 = res.list[2];

        this.resList = res.list;
      });
    },
    getNumber(number) {
      let sum = 0;
      this.resList.forEach((item) => {
        sum += Number(item.number);
      });
      console.log(sum);
      return ((number / sum) * 100).toFixed() + "%";
    },
    getSum() {
      let sum = 0;
      this.resList.forEach((item) => {
        sum += Number(item.number);
      });
      return sum.toFixed();
    },
  },
};
</script>
<style lang="scss" scoped>
.sale-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .lf {
    width: 30%;
    height: 80%;
    position: relative;
    .ll {
      position: absolute;
      right: -17px;
      top: 50%;
      margin-top: -1px;
      width: 10px;
      height: 2px;
      background: #008cff;
    }
    .pt {
      background: url("@/assets/images/public/salepanel/pt.png") no-repeat
        center bottom;
      width: 100%;
      height: 50%;
      background-size: contain;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .icon {
        position: relative;
        height: 60%;
      }
      .txt {
        font-family: "HY";
        font-size: 14px;
        color: #fff;
        text-shadow: 0 0 5px #0080ff;
        position: relative;
        top: -6px;
      }
    }
    .txt-sum {
      background: url("@/assets/images/public/text/txt_bg.png") no-repeat center
        bottom;
      width: 100%;
      height: 50%;
      position: relative;
      .line {
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 100%;
        height: 1px;
        background: linear-gradient(
          to right,
          rgba(31, 187, 239, 0),
          rgba(31, 187, 239, 0.85),
          rgba(31, 187, 239, 0)
        );
      }
      .lbl-val {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        .lbl {
          display: flex;
          flex-direction: column;
          .tl {
            font-size: 12px;
            color: #bfdfff;
            font-family: "HY";
            white-space: nowrap;
          }
          .dw {
            font-size: 12px;
            color: #77c5fe;
            font-family: "HY";
            margin-top: 4px;
          }
        }
        .val {
          color: #00d1ff;
          font-size: 18px;
          font-family: "Agency FB";
          white-space: nowrap;
        }
      }
    }
  }
  .mid {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    .pt {
      background: url("@/assets/images/public/salepanel/pt.png") no-repeat
        center bottom;
      width: 100%;
      height: 32%;
      background-size: contain;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      .txt {
        font-family: "HY";
        font-size: 14px;
        color: #fff;
        text-shadow: 0 0 5px #0080ff;
        position: relative;
        top: -6px;
      }
      .ll {
        position: absolute;
        left: -14px;
        top: 50%;
        margin-top: 5px;
        width: 10px;
        height: 2px;
        background: #008cff;
      }
      .llv {
        &.t {
          position: absolute;
          left: -14px;
          top: 50%;
          margin-top: 5px;
          width: 2px;
          height: calc(100% + 18px);
          background: #008cff;
        }
        &.b {
          position: absolute;
          left: -14px;
          bottom: calc(50% - 7px);
          width: 2px;
          height: calc(100% + 18px);
          background: #008cff;
        }
      }
    }
  }
  .rg {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px 0 0 0;
    .md {
      width: 100%;
      height: 25%;
      position: relative;
      display: flex;
      align-items: center;
      .jt {
        height: 50%;
        margin: 0 5px 0 0;
      }
    }
    .l-txt {
      background: url("@/assets/images/public/salepanel/txt_bg.png") no-repeat
        center center;
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      position: relative;
      .lfk {
        height: 100%;
        position: absolute;
        left: 0;
      }
      .rfk {
        height: 100%;
        position: absolute;
        right: 0px;
        transform: rotateY(180deg);
      }
      .l-f {
        position: absolute;
        left: -3px;
        top: 30%;
        height: 40%;
        width: 3px;
        background: #00e4ff;
      }
      .r-f {
        position: absolute;
        right: -3px;
        top: 30%;
        height: 40%;
        width: 3px;
        background: #00e4ff;
      }

      .nums {
        height: 100%;
        padding: 0 5px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .l1 {
          font-size: 12px;
          color: #77c5fe;
          white-space: nowrap;
        }
        .v1 {
          font-family: "Agency FB";
          font-size: 16px;
          color: #34e7c1;
        }
        .v2 {
          font-family: "Agency FB";
          font-size: 14px;
          color: #34e7c1;
        }
      }
    }
  }
}
@media screen and (min-width: 2560px) {
}
@media screen and (min-width: 3840px) {
  .sale-panel .lf .pt .txt {
    font-size: 20px;
  }
  .sale-panel .mid .pt .txt {
    font-size: 16px;
  }
  .sale-panel .lf .txt-sum .lbl-val .lbl .tl {
    font-size: 16px;
  }
  .sale-panel .lf .txt-sum .lbl-val .lbl .dw {
    font-size: 14px;
  }
  .sale-panel .lf .txt-sum .lbl-val .val {
    font-size: 34px;
  }
  .sale-panel .rg .l-txt .nums {
    padding: 0 10px;
  }
  .sale-panel .rg .l-txt .nums .v1 {
    font-size: 28px;
  }
  .sale-panel .rg .l-txt .nums .v2 {
    font-size: 18px;
  }
  .sale-panel .rg .l-txt .nums .l1 {
    font-size: 14px;
  }
  .sale-panel .rg .md .jt {
    margin: 0 10px;
  }
  .sale-panel .lf .ll {
    height: 4px;
    width: 15px;
    right: -30px;
  }
  .sale-panel .mid {
    margin: 0 0 0 50px;
  }
  .sale-panel .mid .pt .ll {
    height: 4px;
    width: 15px;
    left: -20px;
  }
  .sale-panel .mid .pt .llv.b {
    left: -20px;
    width: 4px;
  }
  .sale-panel .mid .pt .llv.t {
    left: -20px;
    width: 4px;
  }
  .sale-panel .lf .pt .icon {
    height: 90%;
  }
}
</style>
