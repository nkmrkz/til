raspberrypiと機器のLAN通信でハマったのでメモ。

```
sudo vi /etc/dhcpcd.conf
```

```
interface eth0
static ip_address=IP/サブネットマスク長
static routers=デフォゲ
static domain_name_servers=DNS（省略可）
```