# hello-devops

_Please read these instructions carefully._

There are 2 applications in this project:

* **hello-python** is a web page that contains a form; when the form is submitted, hello-python enqueues the message on a RabbitMQ queue.

* **hello-node** is a worker that consumes the RabbitMQ queue and stores any message on a MySQL database.

There's also a `create_database.sql` script, to help you prepare the MySQL database.

Each application contains a short README file with more information.

## Problem

**Deploy this entire stack** in a way that _any message entered on the hello-python form is stored on a MySQL database by hello-node_.

* **There are a few bugs in the code**, and you'll need to fix them to solve this exercise; you should not require any specific knowledge of either Python or NodeJS to solve these issues.

* If you need to make any changes to help you debugging (such as adding logs or catching exceptions) we suggest you keep them so we can understand your thought proccess.

* If you have some knowledge of Python or NodeJS development, feel free to implement or suggest _simple_ improvements to the applications to make them production-ready.

## Solutions

We'll accept _any_ of the following types of solution:

* A script using a CLI, SDK, API or library that deploys the stack on a host running a modern Linux distribution _or_ on the AWS cloud.

* A Docker Compose file _or_ another similar container orchestration solution that deploys the stack on a host running a modern Linux distribution _or_ on the AWS cloud.

* A recipe using one or more configuration management tools (e.g. Terraform, Ansible, Chef, Puppet, CloudFormation, Vagrant, Packer, etc.) that deploys the stack on a host running a modern Linux distribution _or_ on the AWS cloud.

**Important:** please **edit this README file** with step-by-step instructions on _how_ to deploy using your solution. Feel free to also include a short paragraph and/or a diagram explaining your solution.

## Expectations

When assessing this exercise, we will take the following points into consideration:

* Whether the solution works or not
* How _easy_ it is to deploy the solution
* How _resilient_ it is (e.g. if the database takes a few more seconds to start than usual, does the system stop working and never recovers?)

Suppose that a _junior_ developer (who has access to most common Linux distributions and an AWS account) will try to run your solution. Would he be able to install all requirements and run it easily? Would he be able to verify that it works? Should any problems arise (e.g. a package is missing), would he be able to identify and fix it?

We don't expect a production-grade solution, but we expect you to show that you'd be able to deploy a production-grade distributed system given enough tools and time.

## Submissions

You should send us a [git patch](https://git-scm.com/docs/git-format-patch) file with your solution. To do so follow these steps:

1.  Clone (do NOT fork) this repository to your machine:

        $ git clone https://github.com/quintoandar/hello-devops.git

2.  Implement your solution and comit your changes locally:

        $ git commit -am "My solution"

3.  Create a patch file for this repository:

        $ git format-patch origin/master --stdout > result.patch

4.  Email us the `result.patch` file.

Please do **not** fork this repository and do **not** publish your solution online!

## Contact

Feel free to reach out if you have any questions! Also, we expect this problem to take some hours at most, but please do get in touch if you need more time to provide a good solution! It is far better than delivering something that does not work :)
