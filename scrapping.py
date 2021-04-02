import csv
from datetime import datetime
import requests
import lxml
from bs4 import BeautifulSoup
from selenium import webdriver
from flask import Flask,jsonify,request



app=Flask(__name__)


def sample(job,location="",company=""):

    template="https://in.indeed.com/rss?q={}&l={}&rbc={}"
    url=template.format(job,location,company)
    print(url)

    response=requests.get(url)
    soup=BeautifulSoup(response.content,features="xml")
    items=soup.find_all("item")
    print(items)

    datalist=[]

    for item in items:
        data={}
        data["Title"]=item.title.text
        data["link"]=item.link.text
        data["description"]=item.description.text
        data["source"]=item.source.text
        datalist.append(data)
    finalresponse=jsonify(datalist)    
    finalresponse.headers.add("Access-Control-Allow-Origin", "*")

    return  finalresponse



@app.route("/job")
def job():
    job=request.args.get("q",default=None)
    if job is None:
        return jsonify({"message":"Job not entered"}) ,400
    location=request.args.get("l",default="")
    company=request.args.get("rbc",default='')
    
    
    return sample(job,location,company)


       


if __name__=="__main__":
    app.run(debug=True)