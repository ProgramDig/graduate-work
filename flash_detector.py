import subprocess
from flask import Flask, request

app = Flask(__name__)


@app.route('/detector', methods=['POST'])
def detector():
    while True:
        out = subprocess.check_output("wmic logicaldisk get DriveType, caption", shell=True)
        for disk in str(out).strip().split('\\r\\r\\n'):
            if '2' in disk:
                disk = disk.split()
                with open(disk[0] + 'password.txt', 'r') as f:
                    if f.read():
                        return True


if __name__ == "__main__":
    app.run(port=5000)
