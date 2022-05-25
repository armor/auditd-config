## Prerequisites

The following prerequisites are required for this script to run properly:
- `sudo` privileges.
- Supported OSes: CentOS 7, CentOS 8, Ubuntu 18, Ubuntu 20.
- `apt`/`yum` package managers should be present.
- `git` binary should be installed.

## Introduction

The autoinstall script performs the following actions:
- Installs `audit` and some required binaries like (curl).
- Downloads and configures Quantum ruleset for Audit.
- _(optional)_ Installs and creates a home directory for it.
- _(optional)_ Configures Laurel and registers it as an Auditd plugin.
- _(optional)_ Tweaks SeLinux config to allow Laurel to run (CentOS).

## Usage guide

- To install and configure auditd
```shell
chmod +x autoinstall
./autoinstall
```
- To install and configure auditd along with the Laurel plugin
```shell
chmod +x autoinstall
./autoinstall --enable-laurel
```

## TroubleShooting

In case of installation errors like `No package auditd available.`

The audit installation package can be found at:
- Centos : https://people.redhat.com/sgrubb/audit/
- Ubuntu : https://packages.ubuntu.com/bionic/auditd
