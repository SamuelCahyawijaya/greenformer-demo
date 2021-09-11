var obj_sample = {
    "pretraining": 
    {
        "sst":
        {
            "transformer-4L":
            {
                "random":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            }
        },
        "imdb":
        {
            "transformer-4L":
            {
                "random":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            }
        },
        "cifar-10":
        {
            "resnext":
            {
                "random":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            }
        }
    },
    "posttuning":
    {
        "sst":
        {
            "bert-base":
            {
                "svd":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 1, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 2, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 3, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 4, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 42, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 45, "cpu_time": 300, "memory": 2000}
                },
                "snmf":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            }
        },
        "imdb":
        {
            "bert-base":
            {
                "svd":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                },
                "snmf":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            }
        },
        "cifar-10":
        {
            "resnext":
            {
                "svd":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                },
                "snmf":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            }
        }
    },
    "incontext":
    {
        "sst":
        {
            "gpt2-medium":
            {
                "svd":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                },
                "snmf":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            },
            "gpt2-large":
            {
                "svd":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                },
                "snmf":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            },
            "gpt2-xl":{
                "svd":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                },
                "snmf":
                {
                    "-1": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 50, "cpu_time": 400, "memory": 2000},
                    "64": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "128": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "192": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "256": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000},
                    "320": {"acc": 0.5, "f1": 0.5, "rec": 0.5, "pre": 0.5, "mcc": 0.5, "gpu_time": 40, "cpu_time": 300, "memory": 2000}
                }
            }
        }
    }    
}