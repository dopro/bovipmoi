<template>
  <div class="notification">
    <div class="boxModal">
      <div class="mainBoxModal">
        <div>
          <div class="combo d-flex mb-4">
            <div class="listBalance" style="flex: 1 1 0%">Thông báo</div>
          </div>
          {{ this.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SETTINGS from "../../../../settings.json";

export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    connectSever() {
      var _this = this;
      this.connection = new WebSocket(SETTINGS.BASE_URL_SOCKET_SYS);
      this.connection.onmessage = function (event) {
        let data = JSON.parse(event.data);
        let dl = data.data;
        _this.message = dl.notify_message;
      };
    },
  },
  mounted() {},
  created() {
    this.connectSever();
  },
};
</script>

<style scoped>
.boxSelectUnit.cbx .listUnits .itemSelectUnit .info {
  line-height: 30px;
  width: 100%;
}

.boxSelectUnit.cbx .listUnits .itemSelectUnit {
  height: 40px;
  padding: 5px;
}

.boxSelectUnit.cbx .listUnits .itemSelectUnit .info .amount .number {
  display: block;
  width: 100%;
}

.boxSelectUnit .listUnits .itemSelectUnit {
  padding: 10px 11px;
  height: 74px;
  color: #fff;
  border-bottom: 1px solid #131516;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
}

.boxSelectUnit .listUnits .itemSelectUnit:hover {
  background-color: #251f1f;
}

.boxSelectUnit.cbx .listUnits {
  top: 40px;
}

.boxSelectUnit .listUnits {
  border: 1px solid #777777;
  background: transparent;
  border-top: none;
  display: none;
  position: absolute;
  top: 74px;
  left: 0px;
  width: 100%;
  z-index: 9;
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
}

.boxSelectUnit.cbx.activeSelectItem .listUnits {
  display: block;
}

.notification .depos {
  display: block;
}

.button {
  cursor: pointer;
  border: none;
  background: none;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-weight: 700 !important;
  text-decoration: none;
}

.notification .listTab {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #6b6b6b;
  background: transparent;
}

.notification .listTab .itemTab.active {
  font-weight: 700;
  position: relative;
}

.notification .listTab .itemTab {
  width: 50%;
  height: 100%;
  text-align: center;
  background: transparent;
  font-size: 16px;
  line-height: 48px;
  font-weight: 400;
  cursor: pointer;
}

.notification .listTab .itemTab.active:before {
  content: "";
  height: 4px;
  width: 160px;
  background: #fa2843;
  border-radius: 3px 3px 0 0;
  display: block;
  position: absolute;
  bottom: -1px;
  left: 50%;
  margin-left: -80px;
}

.notification .listTab .itemTab.active span {
  color: #fff;
}

.notification .boxModal .mainBoxModal {
  padding: 20px !important;
}

.notification .combo .listBalance {
  margin: 0;
}

.notification .notification_box .form-control {
  color: #fff;
  border: 1px solid hsla(0, 0%, 100%, 0.23);
  border-radius: 8px;
  height: 46px !important;
  line-height: 46px !important;
  margin-bottom: 0 !important;
  padding: 0 10px;
}

.transfer-network-item--bsc .transfer-network-item-fee {
  color: #fedd3c !important;
  text-transform: uppercase;
  font-weight: 700;
}

.boxSelectUnit {
  height: 40px;
  border-radius: 5px;
  position: relative;
}

.borderSecondary2 {
  border: 1px solid;
  border-color: #fa2843;
}

.boxAddress,
.transfer-network {
  overflow: hidden;
}

.address .greenButton {
  background: #23c15f !important;
}

.boxAddress .address button {
  width: 230px;
}

.address .buttonCommon {
  text-align: center;
  border-radius: 5px;
  color: #fff;
  height: 47px;
  padding: 11px 15px;
  line-height: 19px;
  font-weight: 700;
  font-weight: 16px;
  border: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  outline: none;
}

.boxAddress h4.colorSecondary2 {
  background: #221e1e;
  font-size: 12px;
  line-height: 14px;
  color: #778e9f;
  font-weight: 400;
  margin: 0;
  position: absolute;
  top: -6px;
  left: 30px;
  padding: 0 6px;
}

.boxAddress input {
  font-size: 14px;
  border: 1px solid #1b1b1f;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.boxAddress .form-group {
  margin-bottom: 20px;
}

.boxAddress .btn.sendMax,
.boxAddress .paste {
  position: absolute;
  right: 14px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.boxAddress .btn.sendMax {
  top: 50%;
  color: #fff;
  background-color: #fa2843;
  padding: 7px 10px;
  border-radius: 5px;
}

.boxAddress .noted {
  color: #fff;
  display: block;
  font-style: italic;
  padding: 10px;
}

.boxQRCode {
  margin-bottom: 20px;
}

.transfer-network-item.is-active:before {
  content: "";
  display: block;
  width: 17px;
  height: 17px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAYxJREFUOE+N07tPwlAUBvDv2OJjITJqHLrqIsbZCAm7GuNo1EVHGBQY1QnQgdVJjIMDMSHxD7CLo0knVy+JcfUx8Sg95rbpg4Kld+y999fvnJ4SQksrswbLzAPIgChtbzMbIDJAfCcqCT18h4IPtFK/DpAEopaOrrIj6vTtHvIQrWS2AGxNAJxtmaynZl3IRmImCPu6qKpZ+ZDsHvDgPVaC0WYciYraoLgpkrPAw7GC5BywUR14ZYlaYk0iBkCrUUlcYGURuH1hXD5Z3nFRVYm0kslxgcdXxmnTB+x7xNkhpJCbwvICcNa08NsBggnGAj7ilyORfI7w9gmc3A9ws69AlvAvIJGukiKtaDZAOHBLut6bwu66P4ORAKMtaqpGWrmfAdNzsC8uFAk4Q3chaolzZ9iKfR1Em0FoKQV8fEW0nNFGT0nLqXWQAs9jxtQnfeoA+QNLyYgrMuzeuhs2NG22wolGssgErGy7wBDiYWXzEMyFkVTyMriBnloP/sFjkeCb7abL1VGN8MXguT+ofapXySW9rwAAAABJRU5ErkJggg==)
    0 0 no-repeat;
  position: absolute;
  top: -5px;
  right: -5px;
}

.transfer-network-item-label {
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 2px;
  font-weight: 700;
}

.transfer-network-item.is-active .transfer-network-item-label {
  color: #fff;
  font-weight: 700;
}

.transfer-network-warn {
  border-radius: 5px;
  background: rgba(240, 185, 11, 0.26);
  border: 1px solid #f0b90b;
  color: #f0b90b;
  padding: 10px 15px;
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 20px;
}

.transfer-network-item {
  background: #d0c4b9;
  border: 1px solid #9f9085;
  border-radius: 6px;
  margin: 0 4px;
  padding: 9px 0;
  color: #4d3434;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  cursor: pointer;
  position: relative;
}

.notification .transfer-network-item.is-active {
  background-color: #fa2843;
  border-color: #fa2843;
}

.notification .transfer-network-item {
  background: #18191a;
  border: 1px solid #2f3342;
  color: #7c7c7c;
}

.transfer-network-list--deposit {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
}

.transfer-network-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 -4px 15px;
}

.transfer-network-title {
  font-size: 12px;
  line-height: 1;
  margin-bottom: 15px;
}

.icon.USDT {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position: center;
}

.icon.PAYPAL {
  background: url("~@/assets/images/sky/icon_bank/paypal-mini.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 20px;
}

.icon.ETH {
  background: url("~@/assets/images/sky/eth.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.icon.BTC {
  background: url("~@/assets/images/sky/bitcoin.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.icon {
  width: 30px;
  height: 20px;
  text-align: center;
  margin: 5px 4px;
}

.selectedUnit {
  padding: 5px 20px 5px 3px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  cursor: pointer;
}

.selectedUnit .number {
  color: #fff !important;
}

.transfer-network-item.is-active .transfer-network-item-fee {
  color: hsla(0, 0%, 100%, 0.5);
}

.transfer-network-item-fee {
  font-size: 12px;
  line-height: 13px;
}

.boxAddress .enable2fa {
  font-style: italic;
  display: block;
  clear: both;
  margin-bottom: 5px;
  color: #fa2843;
}

.address .buttonCommon {
  text-align: center;
  border-radius: 5px;
  color: #fff;
  height: 47px;
  padding: 11px 15px;
  line-height: 19px;
  font-weight: 700;
  font-weight: 16px;
  border: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  outline: none;
}

.boxAddress .address button {
  width: 230px;
}

.address .redButton {
  background: #fa2843 !important;
}

.qr-code-container canvas {
  width: 150px !important;
  height: 150px !important;
}
</style>
