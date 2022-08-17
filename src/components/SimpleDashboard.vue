<template>
  <div class="h-100 w-100 d-flex flex-column">
    <div class="row g-0 h-100 w-100">
      <div class="col-sm-6">
        <div class="device mx-2">
          <div class="d-flex flex-row justify-content-center">
            <h1>{{mega2650Data.humidity}}</h1>
            <span>%</span>
          </div>
          <h4>ROOM</h4>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="device">
          <div class="d-flex flex-row justify-content-center">
            <h1>{{d1wifiData.humidity}}</h1>
            <span>%</span>
          </div>
          <h4>OUT-DOOR</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetMega2560RealTimeData, GetD1WIFIRealTimeData } from '@/apis/database';
export default {
  data() {
    return {
      mega2650Data: { humidity: -1 },
      d1wifiData: { humidity: -1 },
      fetchDataTimer: null
    }
  },
  mounted() {
    this.fetchDataTimer = setInterval(async () => {
      this.mega2650Data = await GetMega2560RealTimeData();
      this.d1wifiData = await GetD1WIFIRealTimeData();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.fetchDataTimer);
  }
}
</script>

<style>
.device {
  border: 1px solid whitesmoke;
  border-radius: 10px;
  box-shadow: 3px 3px 19px 2px black;
  padding: 40px;
  background-color: rgb(43, 43, 43);
}
.device h1 {
  font-size: 76px;
}
.device span {
  font-size: 30px;
  padding-top: 43px;
  padding-left: 13px;
}
.device h4 {
  font-weight: bold;
  text-decoration: underline;
}
</style>