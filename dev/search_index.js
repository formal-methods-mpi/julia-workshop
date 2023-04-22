var documenterSearchIndex = {"docs":
[{"location":"abstract/","page":"-","title":"-","text":"Julia is a high-level dynamic programming language designed for numerical and scientific computing, data analysis, machine learning, and more. Julia's user-friendly interface, resembling popular languages like R, Python, and Matlab, makes it easily accessible for learners. Its focus on performance, however, enables computational speeds that often rival, or even surpass, those of low-level languages such as C or Fortran. Therefore, Julia is an ideal choice for large-scale data analysis and other computationally intensive tasks, as it can be orders of magnitude faster than R or Python. In this workshop, we will introduce you to the basics of Julia and the key features that set it apart from other languages.","category":"page"},{"location":"abstract/","page":"-","title":"-","text":"This workshop is designed for R/Python/Matlab users interested in learning a new programming language or wanting to improve their data analysis and scientific computing skills. No prior experience with Julia is required, but understanding a programming language is recommended.","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"We will finish this chapter with an exercise that makes use of some of the basic syntax elements described before. Our goal is to implement linear regression.  During the course of the workshop, we will come back to this example several times. Let's first have a look at what linear regression is: Suppose you observe the two variables education (in years) and income (per month in dollar), and you want to predict a persons income based on their education. One way to do this is linear regression. Suppose we conducted a study and observed the following data points:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"using Random\nRandom.seed!(1243)\n\nusing Plots\n\nx = 10 .+ 3*randn(20)\nβ = 300\nα = 1000\ny = α .+ β*x + 500*randn(20)\n\nplot(x, y; seriestype=:scatter)\nsavefig(\"data.png\")","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"(Image: data)","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"On the x-axis, you see the years of education, and on the y-axis you see the monthly income. The task of linear regression is to find a straight line that best describes this relationship:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"Plots.abline!(β, α)\nsavefig(\"lr.png\")","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"(Image: lr)","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"As you may recal from university, school, or learn just now, a straight line is mathematically described by y = alpha + beta x, where in our case, y corresponds to income and x to years of education.","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"compat: Exercise\nWrite a function predict that takes x, α and β as inputs and returns the predicted value for y.","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"<details>\n<summary>Solution</summary>\n<br>","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"function predict(x, α, β)\n    y = α .+ β*x\n    return y\nend\nnothing # hide","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"</details>","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"\nLet's simulate some data for the task at hand. First, we load the Random package (a julia package for random number generation) and set a seed (to make our experiments reproducible):","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"using Random\nRandom.seed!(1243)","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"Next, we generate some random values for years of education:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"x = 10 .+ 3*randn(20)","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"This produces a vector of 20 values with 10 years of education as the average, and some normally distributed random variation.","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"compat: Exercise\nUse your previously defined function predict to generate some values for income (y) with α = 1000, β = 300","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"<details>\n<summary>Solution</summary>\n<br>","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"y = predict(x, 1000, 300)","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"</details>","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"\n Since in reality, income dose not perfectly depend on education, but there is some random variation, we add this random variation to y:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"y += 500*randn(20)","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"And viola! We have some data to work with.","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"In reality of course, we don't know the values for alpha and beta, but we have to estimate them from the data. To do so, we first need some indication of how good a certain combination of values works for our data. Usually, we use the sum of squared errors for this task:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"alpha ","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"sum_i=1^n (haty_i - y_i)^2","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"So we go through all of our n data points (i = 1, ..., n) and for each of those data points we compute the squared distance between the prediction and the value we observed in reality.","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"Task: Define a function squared_error that takes a vector of predicted values and observed values as input and computes the squared loss between them.","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"Solution:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"function squared_error(y, ŷ)\n    error = 0.0\n    for i in eachindex(y)\n        error += (y[i] - ŷ[i])^2\n    end\n    return error\nend","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"or, a bit shorter using broadcasting:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"function squared_error(y, ŷ)\n    return sum((y - ŷ).^2)\nend","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"Task: Using your previously defined predict and squared_error functions to define a function squared_error_regression that takes as input values for α, β, x and y and returns as output the squared error between predictions and observed values. Then, use this function to compute the squared error for the parameters","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"Solution:","category":"page"},{"location":"Chapter1/exercise/","page":"Exercise","title":"Exercise","text":"function squared_error_regression(α, β, y, x)\n    return squared_error(y, predict(x, α, β))\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Workshop","category":"page"},{"location":"#What-is-this-Workshop-about?","page":"Home","title":"What is this Workshop about?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"import Markdown; Markdown.parse_file(\"../src/abstract.md\")","category":"page"}]
}
