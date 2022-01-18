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
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"addTaskInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"airDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"complete","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"confirm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"getTaskInfo","outputs":[{"components":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint8","name":"status","type":"uint8"},{"internalType":"address","name":"receiver","type":"address"}],"internalType":"struct FeedMob.TaskInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhiteList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"minter","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"maxNftSupply","type":"uint64"}],"name":"setMaxNftSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"take","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taskInfos","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint8","name":"status","type":"uint8"},{"internalType":"address","name":"receiver","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const provider = new ethers.providers.Web3Provider(web3.currentProvider);
const signer = provider.getSigner();
const contractAddress = NODE_ENV["CONTRACT_ADDRESS"];
const Contract = new ethers.Contract(contractAddress, contractABI, provider);
const contractWithSigner = Contract.connect(signer);
const TargetChain = {id: NODE_ENV["CHAIN_ID"], name: NODE_ENV["CHAIN_NAME"]};
const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

function fetchErrMsg (err) {
    const errMsg = err.error ? err.error.message : err.message;
    alert('Error:  ' + errMsg.split(": ")[1]);
    $("#spinner").addClass("hide");
}

async function checkChainId () {
    const { chainId } = await provider.getNetwork();
    if (chainId != parseInt(TargetChain.id)) {
        alert("We don't support this chain, please switch to " + TargetChain.name);
        return;
    }
}

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
    checkChainId();

    try {
        const tx = await contractWithSigner.addTaskInfo(taskId, reward);
        await tx.wait();

        console.log("add task receipt: ", tx);
        location.reload();
        alert("Add task success");
    } catch (err) {
        fetchErrMsg(err);
        const url = "/tasks/" + taskId;
        const $form = $('<form action="' + url + '" method="post">' +
            '<input type="hidden" name="authenticity_token" value="' + token + '" />' +
            '<input type="hidden" name="_method" value="delete" /></form>');
        $('body').append($form);
        $form.submit();
    }
}

const take = async function(taskId) {
    checkChainId();

    try {
        const tx = await contractWithSigner.take(taskId, loginAddress);
        await tx.wait();
        console.log("take task receipt:", tx);
        const url = "/tasks/" + taskId + "/take";
        const $form = $('<form action="' + url + '" method="post">' +
            '<input type="hidden" name="authenticity_token" value="' + token + '" />' +
            '<input type="hidden" name="receiver" value="' + loginAddress + '" />' +
            '<input type="hidden" name="_method" value="put" /></form>');
        $('body').append($form);
        $form.submit();
    } catch (err) {
        fetchErrMsg(err);
    }
}

const complete = async function(taskId) {
    checkChainId();

    try {
        const tx = await contractWithSigner.complete(taskId);
        await tx.wait();
        console.log("complete task receipt:", tx);
        const url = "/tasks/" + taskId + "/complete";
        const $form = $('<form action="' + url + '" method="post">' +
            '<input type="hidden" name="authenticity_token" value="' + token + '" />' +
            '<input type="hidden" name="_method" value="put" /></form>');
        $('body').append($form);
        $form.submit();
    } catch (err) {
        fetchErrMsg(err);
    }
}

const confirm = async function(taskId) {
    checkChainId();

    try {
        const tx = await contractWithSigner.confirm(taskId);
        await tx.wait();
        console.log("confirm task receipt:", tx);
        const url = "/tasks/" + taskId + "/confirm";
        const $form = $('<form action="' + url + '" method="post">' +
            '<input type="hidden" name="authenticity_token" value="' + token + '" />' +
            '<input type="hidden" name="_method" value="put" /></form>');
        $('body').append($form);
        $form.submit();
    } catch (err) {
        fetchErrMsg(err);
    }
}

const updateForm = function() {
    const $form = $("#editForm");
    const taskId = $form.find("#task_id").val();
    const title = $form.find("#task_title").val();
    const desc = $form.find("#task_description").val();
    const url = "/tasks/" + taskId;
    const $newForm = $('<form action="' + url + '" method="post">' +
                    '<input type="hidden" name="authenticity_token" value="' + token + '" />' +
                    '<input type="hidden" name="_method" value="put" />' +
                    '<input type="hidden" name="task[title]" value="' + title + '" />' +
                    '<input type="hidden" name="task[description]" value="' + desc + '" /></form>');
    $('body').append($newForm);
    $newForm.submit();
}

$(document).on('turbolinks:load', function() {
    'use strict';
    $(function() {
        $('[data-bs-toggle="tooltip"]').tooltip({html: true});

        checkChainId();
        toggleAddress();

        // detect Metamask account change
        ethereum.on('accountsChanged', function (accounts) {
            console.log('accountsChanges',accounts);
            if (accounts.length > 0) {
                localStorage.setItem("loginAddress", accounts[0]);
                loginAddress = accounts[0];
            } else {
                localStorage.removeItem("loginAddress");
                loginAddress = null;
            }
            toggleAddress();
        });

        // detect Network account change
        ethereum.on('chainChanged', function(networkId){
            console.log('networkChanged',networkId);
            if (networkId != parseInt(TargetChain.id)) {
                alert("We don't support this chain, please switch to " + TargetChain.name);
            }
        });

        $(".editBtn").hide();

        $(".task").each(function () {
            if ($(this).data("publisher") == loginAddress) {
                $(this).find(".editBtn").show();
            } else {
                $(this).find(".confirmBtn").hide();
            }

            if ($(this).data("receiver") != loginAddress) {
                $(this).find(".completeBtn").hide();
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

        $(document).on("click", ".takeBtn", function(e) {
            e.preventDefault();
            $("#spinner").removeClass("hide");
            const taskId = $(this).data("id");
            take(taskId);
        })

        $(document).on("click", ".completeBtn", function(e) {
            e.preventDefault();
            $("#spinner").removeClass("hide");
            const taskId = $(this).data("id");
            complete(taskId);
        })

        $(document).on("click", ".confirmBtn", function(e) {
            e.preventDefault();
            $("#spinner").removeClass("hide");
            const taskId = $(this).data("id");
            confirm(taskId);
        })

        $(".editBtn").on("click", function(e) {
            e.preventDefault();
            $("#editForm").find("#task_id").val($(this).data("id"));
            $("#editForm").find("#task_title").val($(this).data("title"));
            $("#editForm").find("#task_description").val($(this).data("desc"));
            $("#editTaskModal").modal("show");
        })

        $(document).on("click", ".submitEditBtn", function(e) {
            e.preventDefault();
            updateForm();
        })
    });
});