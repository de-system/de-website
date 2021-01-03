<template>
<div class="pastevent">
    <topbar />
    <sidebar />
    <form action="post" id="amountform">
        <h5>過去銷量分析</h5>
        <Bar id="bar-chart" style="width : 30vw; height: 35vh; padding: 0px; left: 50%" />
    </form>
    <form action="post" id="form">
        <h5>顧客年齡分佈</h5>
        <Pie id="pie-chart" style="width : 35vw; height: 35vh; padding: 0px; left: 55%" />
    </form>
    <!-- <b-tabs content-class="mt-3" fill action="post" id="customerIndex" >
      <b-tab title="七月" active :title-link-class="'tab-title-class'" ><p>I'm the first tab</p> 
      <Bar
        id="bar-chart"
        style="width : 30vw; height: 20vh; padding: 0px; left: 50% "
      /></b-tab>
      <b-tab title="八月" :title-link-class="'tab-title-class'"><p>I'm the second tab</p></b-tab>
      <b-tab title="九月"  :title-link-class="'tab-title-class'"><p>I'm the first tab</p></b-tab>
      <b-tab title="十月" :title-link-class="'tab-title-class'"><p>I'm the second tab</p></b-tab>
      <b-tab title="十一月" :title-link-class="'tab-title-class'"><p>I'm the first tab</p></b-tab>
      <b-tab title="十二月" :title-link-class="'tab-title-class'"><p>I'm the second tab</p></b-tab>
    </b-tabs> -->
    <Tabbb/>
    
    
</div>
</template>

<script>

import topbar from "../components/topbar";
import sidebar from "../components/sidebar";
import Pie from "../components/piechart";
import Bar from "../components/barchart";
import Tabbb from "../components/barebonetab";
export default {
    name: "pastevent",
    components: {
        topbar,
        sidebar,
        Pie,
        Bar,
        Tabbb,
    },
    data() {
        return {
            chartData: {
                Books: 24,
                Magazine: 30,
                Newspapers: 10,
            },
        };
    },
    methods: {
      
    },
};
</script>

<style >
/* <style scoped> */
.pastevent {
    margin: 0%;
}

.tab-title-class {
    color: #c9a175 !important;
}


#form {
    margin: 0%;
    top: 20%;
    left: 58%;
    position: fixed;

    width: 35vw;
    height: 45vh;
    border-radius: 8px;
    background-color: #d8c0a6;
    box-shadow: 1px 1px 5px 1px #c3baba;
    padding: 12px;

    text-align: center;
    color: white;
}
#pie-chart {
    /* border: black 2px solid; */
    width: 20vw;
}

#amountform {
    margin: 0%;
    top: 20%;
    left: 20%;
    position: fixed;

    width: 35vw;
    height: 45vh;
    border-radius: 8px;
    background-color: #d8c0a6;
    box-shadow: 1px 1px 5px 1px #c3baba;
    padding: 12px;

    text-align: center;
    color: white;
}
/* #customerIndex {
    margin: 0%;
    top: 67%;
    left: 20%;
    position: fixed;

    width: 73vw;
    height: 26vh;
    border-radius: 8px;
    background-color: #d8c0a6;
    box-shadow: 1px 1px 5px 1px #c3baba;
    padding: 12px;

    text-align: left;
    color: white;
} */


</style>
