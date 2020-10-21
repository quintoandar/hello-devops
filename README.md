# hello-devops

_Please read these instructions carefully._

There are 3 applications in this project:

* **hello-python** is a web page that contains a form; when the form is submitted, **hello-python** gets the history of a programming language from *hello-node* app and shows it.

* **hello-node** is an api that returns the history of a certain programming language and sends information about this request to *hello-go* for analytics purposes 

* **hello-go** is an api that receives information about history of programming languages searches and log it on console

Each application contains a short README file with more information.

## Problem

**Deploy this entire stack** in a way that users can properly search for programming languages history on *hello-python* and all searchs are logged in *hello-go* console.

* If you need to make any changes to help you debugging (such as adding logs or catching exceptions) we suggest you keep them so we can understand your thought process.

* If you have some knowledge of Python, NodeJS or Golang development, feel free to implement or suggest _simple_ improvements to the applications to make them production-ready.

## Solutions

We'll accept _just_ one type of solution:

* A Docker Compose file that deploys the stack on a host running a modern Linux distribution.

**Important:** please **edit this README file** with step-by-step instructions on _how_ to deploy using your solution. Feel free to also include a short paragraph and/or a diagram explaining your solution.

## Expectations

When assessing this exercise, we will take the following points into consideration:

* Whether the solution works or not
* How _easy_ it is to deploy the solution
* How _resilient_ it is (e.g. if the database takes a few more seconds to start than usual, does the system stop working and never recovers?)

Suppose that a _junior_ developer (who has access to most common Linux distributions and an AWS account) will try to run your solution. Would they be able to install all requirements and run it easily? Would they be able to verify that it works? Should any problems arise (e.g. a package is missing), would they be able to identify and fix it?

We don't expect a production-grade solution, but we expect you to show that you'd be able to deploy a production-grade distributed system given enough tools and time.