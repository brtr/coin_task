// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'bootstrap/dist/js/bootstrap'
import "bootstrap/dist/css/bootstrap";

require("@rails/ujs").start();
require("turbolinks").start();
require("jquery");
let loginAddress = localStorage.getItem("loginAddress");
const ethers = require("ethers");
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"addTaskInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"airDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"complete","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"confirmTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"getTaskInfo","outputs":[{"components":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isDone","type":"bool"},{"internalType":"address","name":"receiver","type":"address"}],"internalType":"struct FeedMob.TaskInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhiteList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"minter","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"maxNftSupply","type":"uint64"}],"name":"setMaxNftSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taskInfos","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isDone","type":"bool"},{"internalType":"address","name":"receiver","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const provider = new ethers.providers.Web3Provider(web3.currentProvider);
const signer = provider.getSigner();
const Contract = new ethers.Contract(NODE_ENV["CONTRACT_ADDRESS"], contractABI, provider);
const contractWithSigner = Contract.connect(signer);
const TargetChain = {id: NODE_ENV["CHAIN_ID"], name: NODE_ENV["CHAIN_NAME"]};

function toggleAddress() {
    if(loginAddress) {
        $("#login_address").text(loginAddress);
        $(".loginBtns .meta_dropdown").removeClass("hide");
        $(".loginBtns .btn").addClass("hide");
    } else {
        $(".loginBtns .meta_dropdown").addClass("hide");
        $(".loginBtns .btn").removeClass("hide");
    }
}

const checkLogin = async function() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length > 0) {
        localStorage.setItem("loginAddress", accounts[0]);
        loginAddress = accounts[0];
    } else {
        localStorage.removeItem("loginAddress");
        loginAddress = null;
    }
    toggleAddress();
}

const addTask = async function(taskId, reward) {
    contractWithSigner.addTaskInfo(taskId, reward)
    .then(function(receipt) {
        console.log("add task receipt: ", receipt);
        location.reload();
        alert("Add task success");
    })
}

const complete = async function(taskId, receiver) {
    const tx = await contractWithSigner.complete(taskId, receiver);
    await tx.wait();
    console.log("complete task is ", tx);
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const url = "/tasks/" + taskId + "/complete";
    const $form = $('<form action="' + url + '" method="post">' +
        '<input type="hidden" name="authenticity_token" value="' + token + '" />' +
        '<input type="hidden" name="_method" value="put" /></form>');
    $('body').append($form);
    $form.submit();
}

const confirmTask = async function(taskId) {
    const tx = await contractWithSigner.confirmTask(taskId);
    await tx.wait();
    console.log("confirm task is ", tx);
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const url = "/tasks/" + taskId + "/confirm";
    const $form = $('<form action="' + url + '" method="post">' +
        '<input type="hidden" name="authenticity_token" value="' + token + '" />' +
        '<input type="hidden" name="_method" value="put" /></form>');
    $('body').append($form);
    $form.submit();
}

$(document).on('turbolinks:load', function() {
    'use strict';
    $(function() {
        toggleAddress();

        // detect Metamask account change
        ethereum.on('accountsChanged', function (accounts) {
            console.log('accountsChanges',accounts);
            loginAddress = accounts[0];
            toggleAddress();
        });

        // detect Network account change
        ethereum.on('chainChanged', function(networkId){
            console.log('networkChanged',networkId);
            if (networkId != parseInt(TargetChain.id)) {
            alert("We don't support this chain, please switch to " + TargetChain.name);
            }
        });

        $(".task").each(function () {
            if ($(this).data("publisher") != loginAddress) {
                $("#confirmBtn").hide();
            }

            if ($(this).data("receiver") != loginAddress) {
                $("#completeBtn").hide();
            }
        });

        $("#btn-login").on("click", function(){
            checkLogin();
        });

        $("#btn-logout").on("click", function(){
            loginAddress = null;
            toggleAddress();
        });

        $(".addTaskBtn").on("click", function(e){
            e.preventDefault();
            if (loginAddress) {
                $("#addTaskModal").modal("show");
            } else {
                alert("Please connect to metamask first");
            }
        });

        $(".takeBtn").on("click", function(e) {
            e.preventDefault();
            $(this).attr("href", $(this).attr("href") + "?receiver=" + loginAddress);
        });

        $(document).on("click", ".submitBtn", function(e) {
            e.preventDefault();
            const title = $("#task_title").val();
            const desc = $("#task_description").val();
            const reward = $("#task_reward").val();
            $.ajax({
                method: "POST",
                url: "/tasks",
                data: { task: { title: title, description: desc, reward: reward, publisher: loginAddress } }
            }).done(function(data){
                if (data.success) {
                    $("#addTaskModal").modal("hide");
                    $("#spinner").removeClass("hide");
                    addTask(data.task_id, reward);
                } else {
                    alert(data.error);
                }
            })
        })

        $(document).on("click", ".completeBtn", function(e) {
            e.preventDefault();
            $("#spinner").removeClass("hide");
            const taskId = $(this).data("id");
            const receiver = $(this).data("receiver");
            complete(taskId, receiver);
        })

        $(document).on("click", ".confirmBtn", function(e) {
            e.preventDefault();
            $("#spinner").removeClass("hide");
            const taskId = $(this).data("id");
            confirmTask(taskId);
        })
    });
});